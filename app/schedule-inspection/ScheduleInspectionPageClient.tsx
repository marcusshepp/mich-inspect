"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    CheckCircle,
    User,
    Home,
    AlertCircle,
    Info,
} from "lucide-react";
import { Section, SectionHeader, Card, Button } from "../../components/shared";
import { contactInfo } from "@/lib/contact-info";
import "react-datepicker/dist/react-datepicker.css";
import "./schedule-inspection.css";

// form validation schema using zod
const inspectionFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    propertyAddress: z
        .string()
        .min(5, "Please enter the complete property address"),
    propertyType: z.enum([
        "single-family",
        "condo",
        "townhouse",
        "multi-family",
        "commercial",
    ]),
    inspectionType: z.enum([
        "standard",
        "pre-listing",
        "new-construction",
        "warranty",
        "comprehensive",
    ]),
    specialRequests: z.string().optional(),
    agreedToTerms: z
        .boolean()
        .refine(
            (val) => val === true,
            "You must agree to the terms and conditions",
        ),
});

type InspectionFormData = z.infer<typeof inspectionFormSchema>;

// monk available time slots
const TIME_SLOTS = [
    { time: "8:00 AM", available: true },
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: false },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
];

// booked dates. TODO: this should be an api call on page load or a composite call to reduce latency if approved
const BUSY_DATES = [
    new Date(2025, 4, 27), // May 27, 2025 (month is 0-indexed)
    new Date(2025, 4, 30), // May 30, 2025
    new Date(2025, 5, 3), // June 3, 2025
];

// TODO: update actual property types.
const PROPERTY_TYPES = [
    { value: "single-family", label: "Single Family Home" },
    { value: "condo", label: "Condominium" },
    { value: "townhouse", label: "Townhouse" },
    { value: "multi-family", label: "Multi-Family Home" },
    { value: "commercial", label: "Commercial Property" },
];

// TODO: get actual inspection types from old site
const INSPECTION_TYPES = [
    { value: "standard", label: "Standard Home Inspection", price: "$450-650" },
    {
        value: "pre-listing",
        label: "Pre-Listing Inspection",
        price: "$400-600",
    },
    {
        value: "new-construction",
        label: "New Construction Inspection",
        price: "$500-700",
    },
    { value: "warranty", label: "Warranty Inspection", price: "$350-500" },
    {
        value: "comprehensive",
        label: "Comprehensive Inspection",
        price: "$600-850",
    },
];

export default function ScheduleInspectionPageClient() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [availableTimesForDate, setAvailableTimesForDate] =
        useState(TIME_SLOTS);
    const [calendarMonth, setCalendarMonth] = useState(new Date());

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<InspectionFormData>({
        resolver: zodResolver(inspectionFormSchema),
    });

    // get tomorrows date as minimum available selection date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // max date as 3 months from the current date
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    // function to check if a date is busy
    const isDateBusy = (date: Date) => {
        return BUSY_DATES.some(
            (busyDate) => busyDate.toDateString() === date.toDateString(),
        );
    };

    // function to check if a date is available
    // TODO: again all this should come from an api call.
    const isDateAvailable = (date: Date) => {
        const day = date.getDay();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return day !== 0 && day !== 6 && date >= today && !isDateBusy(date);
    };

    // TODO: this should be an api call to update available times based on selected date
    useEffect(() => {
        if (selectedDate) {
            const dayOfWeek = selectedDate.getDay();
            let timesForDay = [...TIME_SLOTS];
            if (dayOfWeek === 1) {
                timesForDay = timesForDay.map((slot) => ({
                    ...slot,
                    available:
                        slot.time !== "11:00 AM" && slot.time !== "2:00 PM",
                }));
            } else if (dayOfWeek === 5) {
                timesForDay = timesForDay.map((slot) => ({
                    ...slot,
                    available:
                        slot.time !== "8:00 AM" && slot.time !== "4:00 PM",
                }));
            }

            setAvailableTimesForDate(timesForDay);

            const selectedTimeSlot = timesForDay.find(
                (slot) => slot.time === selectedTime,
            );
            if (
                selectedTime &&
                (!selectedTimeSlot || !selectedTimeSlot.available)
            ) {
                setSelectedTime("");
            }
        }
    }, [selectedDate, selectedTime]);
    const onSubmit = async (data: InspectionFormData) => {
        if (!selectedDate || !selectedTime) {
            const missingFields = [];
            if (!selectedDate) missingFields.push("date");
            if (!selectedTime) missingFields.push("time");

            alert(
                `Please select a ${missingFields.join(
                    " and ",
                )} for your inspection.`,
            );
            return;
        }

        setIsSubmitting(true);

        try {
            //TODO: another api call simulation
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const bookingData = {
                ...data,
                selectedDate: selectedDate.toDateString(),
                selectedTime,
                bookingId: `INS-${Date.now()}`,
                submittedAt: new Date().toISOString(),
            };

            console.log("Inspection booking submitted:", bookingData);

            // TODO: api simulation to save booking data.
            // const response = await fetch('/api/bookings', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(bookingData)
            // });

            setIsSubmitted(true);
            reset();
            setSelectedDate(null);
            setSelectedTime("");
        } catch (error) {
            console.error("Error submitting inspection booking:", error);
            alert(
                "There was an error submitting your request. Please try again or call us directly at " +
                    contactInfo.phone,
            );
        } finally {
            setIsSubmitting(false);
        }
    };
    if (isSubmitted) {
        return (
            <Section className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Inspection Successfully Scheduled!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Thank you for choosing {contactInfo.company}. We've
                        received your inspection request and will contact you
                        within 2 hours to confirm your appointment.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
                        <h3 className="font-semibold text-gray-900 mb-4 text-center">
                            Booking Confirmation
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">
                                    Confirmation ID:
                                </span>
                                <span className="ml-2 text-gray-600">
                                    INS-{Date.now().toString().slice(-6)}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Inspector:
                                </span>
                                <span className="ml-2 text-gray-600">
                                    {contactInfo.founder}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Phone:
                                </span>
                                <span className="ml-2 text-gray-600">
                                    {contactInfo.phone}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Email:
                                </span>
                                <span className="ml-2 text-gray-600">
                                    {contactInfo.email}
                                </span>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold text-red-900 mb-3">
                            What happens next?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    {" "}
                                    <div className="w-6 h-6 bg-[#731017] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        1
                                    </div>
                                    <div>
                                        <p className="font-medium text-red-900">
                                            Confirmation Call
                                        </p>
                                        <p className="text-red-800 text-sm">
                                            We'll call within the next business
                                            day to confirm details
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    {" "}
                                    <div className="w-6 h-6 bg-[#731017] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        2
                                    </div>
                                    <div>
                                        <p className="font-medium text-red-900">
                                            Email Instructions
                                        </p>
                                        <p className="text-red-800 text-sm">
                                            Preparation checklist and what to
                                            expect
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    {" "}
                                    <div className="w-6 h-6 bg-[#731017] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        3
                                    </div>
                                    <div>
                                        <p className="font-medium text-red-900">
                                            Inspection Day
                                        </p>
                                        <p className="text-red-800 text-sm">
                                            Professional inspection at scheduled
                                            time
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    {" "}
                                    <div className="w-6 h-6 bg-[#731017] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        4
                                    </div>
                                    <div>
                                        <p className="font-medium text-red-900">
                                            Detailed Report
                                        </p>
                                        <p className="text-red-800 text-sm">
                                            Comprehensive report within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => setIsSubmitted(false)}>
                            Schedule Another Inspection
                        </Button>
                        <Button variant="outline" as="a" href="/">
                            Return to Home
                        </Button>
                        <Button
                            variant="outline"
                            as="a"
                            href={`tel:${contactInfo.phone}`}
                        >
                            Call Us: {contactInfo.phone}
                        </Button>
                    </div>
                </motion.div>
            </Section>
        );
    }
    return (
        <div className="schedule-inspection-page min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <Section>
                <SectionHeader
                    title="Schedule Your Inspection"
                    subtitle={`Choose your preferred date and time for a professional home inspection with ${contactInfo.founder}`}
                    badge="Book Now"
                    badgeIcon={<Calendar className="w-4 h-4" />}
                />{" "}
                <div className="max-w-6xl mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {/* left column with calendar and time selection*/}
                        <div className="space-y-6">
                            {" "}
                            {/* Unified Date & Time Selection Card */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#731017]" />
                                    Select Date & Time
                                </h3>
                                <div className="flex flex-col lg:flex-row xl:flex-col 2xl:flex-row gap-6 lg:gap-8">
                                    {/* Date Selection */}
                                    <div className="flex-1 space-y-4">
                                        <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#731017]" />
                                            Choose Date
                                        </h4>
                                        <div className="calendar-container">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date: Date | null) =>
                                                    setSelectedDate(date)
                                                }
                                                minDate={tomorrow}
                                                maxDate={maxDate}
                                                filterDate={isDateAvailable}
                                                inline
                                                className="w-full"
                                                onMonthChange={(date) =>
                                                    setCalendarMonth(date)
                                                }
                                                dayClassName={(date) => {
                                                    if (
                                                        !isDateAvailable(date)
                                                    ) {
                                                        return "unavailable-date";
                                                    }
                                                    if (isDateBusy(date)) {
                                                        return "busy-date";
                                                    }
                                                    return "available-date";
                                                }}
                                                renderDayContents={(
                                                    day,
                                                    date,
                                                ) => {
                                                    const isBusy =
                                                        isDateBusy(date);

                                                    return (
                                                        <div className="relative">
                                                            <span>{day}</span>
                                                            {isBusy && (
                                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                                            )}
                                                        </div>
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-3 bg-[#731017] rounded-full"></div>
                                                    <span>Available</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                    <span>Busy</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                                    <span>Unavailable</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                * Inspections available
                                                Monday-Friday. Weekend
                                                appointments upon request.
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* Time Selection */}
                                    <div className="flex-1 space-y-4">
                                        <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[#731017]" />
                                            Choose Time
                                            {selectedDate && (
                                                <span className="text-sm font-normal text-gray-500 ml-2">
                                                    (
                                                    {selectedDate.toLocaleDateString()}
                                                    )
                                                </span>
                                            )}
                                        </h4>
                                        {selectedDate ? (
                                            <>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-2 time-slots-grid">
                                                    {availableTimesForDate.map(
                                                        (slot) => (
                                                            <button
                                                                key={slot.time}
                                                                type="button"
                                                                onClick={() =>
                                                                    slot.available &&
                                                                    setSelectedTime(
                                                                        slot.time,
                                                                    )
                                                                }
                                                                disabled={
                                                                    !slot.available
                                                                }
                                                                className={`time-slot-button p-3 text-sm font-medium rounded-lg border transition-all ${
                                                                    selectedTime ===
                                                                    slot.time
                                                                        ? "selected bg-[#731017] text-white border-[#731017] shadow-md"
                                                                        : slot.available
                                                                        ? "bg-white text-gray-700 border-gray-200 hover:border-[#731017] hover:bg-red-50"
                                                                        : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                                                                }`}
                                                            >
                                                                {slot.time}
                                                                {!slot.available && (
                                                                    <div className="text-xs mt-1">
                                                                        Booked
                                                                    </div>
                                                                )}
                                                            </button>
                                                        ),
                                                    )}
                                                </div>
                                                {selectedDate &&
                                                    selectedTime && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                                <p className="text-green-800 font-medium">
                                                                    Selected:{" "}
                                                                    {selectedDate.toLocaleDateString()}{" "}
                                                                    at{" "}
                                                                    {
                                                                        selectedTime
                                                                    }
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                                <div className="text-center">
                                                    <Info className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-gray-500">
                                                        Please select a date
                                                        first
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* right column info form */}
                        <div className="space-y-6">
                            {" "}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <User className="w-5 h-5 text-[#731017]" />
                                    Contact Information
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            {...register("firstName")}
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                            placeholder="John"
                                        />
                                        {errors.firstName && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.firstName.message}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            {...register("lastName")}
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.lastName.message}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.email.message}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            {...register("phone")}
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                            placeholder="(616) 555-0123"
                                        />
                                        {errors.phone && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.phone.message}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Home className="w-5 h-5 text-[#731017]" />
                                    Property Information
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Property Address *
                                    </label>
                                    <input
                                        {...register("propertyAddress")}
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                        placeholder="123 Main Street, Grand Rapids, MI 49503"
                                    />
                                    {errors.propertyAddress && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.propertyAddress.message}
                                        </motion.p>
                                    )}
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Property Type *
                                        </label>
                                        <select
                                            {...register("propertyType")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                        >
                                            <option value="">
                                                Select property type
                                            </option>
                                            {PROPERTY_TYPES.map((type) => (
                                                <option
                                                    key={type.value}
                                                    value={type.value}
                                                >
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.propertyType && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.propertyType.message}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Inspection Type *
                                        </label>
                                        <select
                                            {...register("inspectionType")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors"
                                        >
                                            <option value="">
                                                Select inspection type
                                            </option>
                                            {INSPECTION_TYPES.map((type) => (
                                                <option
                                                    key={type.value}
                                                    value={type.value}
                                                >
                                                    {type.label} ({type.price})
                                                </option>
                                            ))}
                                        </select>
                                        {errors.inspectionType && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.inspectionType.message}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>{" "}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Special Requests or Notes
                                    </label>
                                    <textarea
                                        {...register("specialRequests")}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#731017] focus:border-transparent transition-colors resize-none"
                                        placeholder="Any special areas of concern, access instructions, etc."
                                    />
                                </div>
                            </Card>
                            <Card className="p-6">
                                <div className="flex items-start gap-3">
                                    <input
                                        {...register("agreedToTerms")}
                                        type="checkbox"
                                        id="terms"
                                        className="mt-1 w-5 h-5 text-[#731017] border-gray-300 rounded focus:ring-[#731017] focus:ring-2"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-gray-700 leading-relaxed"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="/terms"
                                            className="text-[#731017] hover:underline font-medium"
                                        >
                                            terms and conditions
                                        </a>{" "}
                                        and authorize {contactInfo.company} to
                                        contact me regarding this inspection.
                                    </label>
                                </div>
                                {errors.agreedToTerms && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.agreedToTerms.message}
                                    </motion.p>
                                )}
                            </Card>{" "}
                            <Button
                                type="submit"
                                disabled={
                                    isSubmitting ||
                                    !selectedDate ||
                                    !selectedTime
                                }
                                className="w-full py-4 text-lg font-semibold"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    "Schedule Inspection"
                                )}
                            </Button>
                            {(selectedDate ||
                                selectedTime ||
                                watch("inspectionType")) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6"
                                >
                                    {" "}
                                    <Card className="p-6 bg-red-50 border-red-200">
                                        <h4 className="font-semibold text-red-900 mb-3">
                                            Booking Summary
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            {selectedDate && (
                                                <div className="flex justify-between">
                                                    <span className="text-red-700">
                                                        Date:
                                                    </span>
                                                    <span className="font-medium text-red-900">
                                                        {selectedDate.toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            },
                                                        )}
                                                    </span>
                                                </div>
                                            )}{" "}
                                            {selectedTime && (
                                                <div className="flex justify-between">
                                                    <span className="text-red-700">
                                                        Time:
                                                    </span>
                                                    <span className="font-medium text-red-900">
                                                        {selectedTime}
                                                    </span>
                                                </div>
                                            )}
                                            {watch("inspectionType") && (
                                                <div className="flex justify-between">
                                                    <span className="text-red-700">
                                                        Type:
                                                    </span>
                                                    <span className="font-medium text-red-900">
                                                        {
                                                            INSPECTION_TYPES.find(
                                                                (t) =>
                                                                    t.value ===
                                                                    watch(
                                                                        "inspectionType",
                                                                    ),
                                                            )?.label
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                            {watch("inspectionType") && (
                                                <div className="flex justify-between">
                                                    <span className="text-blue-700">
                                                        Estimated Price:
                                                    </span>
                                                    <span className="font-medium text-blue-900">
                                                        {
                                                            INSPECTION_TYPES.find(
                                                                (t) =>
                                                                    t.value ===
                                                                    watch(
                                                                        "inspectionType",
                                                                    ),
                                                            )?.price
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        {(!selectedDate || !selectedTime) && (
                                            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                                <div className="flex items-center gap-2 text-amber-800">
                                                    <AlertCircle className="w-4 h-4" />
                                                    <span className="text-sm">
                                                        Please select both date
                                                        and time to complete
                                                        booking
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                </motion.div>
                            )}
                        </div>
                    </form>
                </div>
                {/* right column contact info section*/}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 text-center"
                >
                    <Card className="p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need to speak with someone?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our team is here to help with any questions about
                            your inspection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {" "}
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#731017] text-white rounded-lg hover:bg-[#651014] transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                {contactInfo.phone}
                            </a>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                {contactInfo.email}
                            </a>
                        </div>
                    </Card>
                </motion.div>
            </Section>

            <style jsx global>{`
                .react-datepicker {
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    font-family: inherit;
                    width: 100%;
                }

                .react-datepicker__header {
                    background-color: #f8fafc;
                    border-bottom: 1px solid #e5e7eb;
                    border-radius: 12px 12px 0 0;
                    padding: 1rem;
                }

                .react-datepicker__current-month {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1f2937;
                }

                .react-datepicker__navigation {
                    top: 1.2rem;
                }

                .react-datepicker__navigation-icon::before {
                    border-color: #6b7280;
                    border-width: 2px 2px 0 0;
                    width: 8px;
                    height: 8px;
                }

                .react-datepicker__day {
                    margin: 0.2rem;
                    width: 2.5rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    border-radius: 8px;
                    transition: all 0.2s;
                }

                .react-datepicker__day:hover {
                    background-color: #dbeafe;
                    color: #1e40af;
                }

                .react-datepicker__day--selected {
                    background-color: #2563eb;
                    color: white;
                }

                .react-datepicker__day--disabled {
                    color: #d1d5db;
                    cursor: not-allowed;
                }

                .react-datepicker__day--disabled:hover {
                    background-color: transparent;
                    color: #d1d5db;
                }

                .react-datepicker__day-name {
                    margin: 0.2rem;
                    width: 2.5rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #6b7280;
                }
            `}</style>
        </div>
    );
}
