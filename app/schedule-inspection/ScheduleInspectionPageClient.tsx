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

// Form validation schema
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

// Available time slots with availability simulation
const TIME_SLOTS = [
    { time: "8:00 AM", available: true },
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false }, // Simulate some unavailable slots
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: false },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
];

// Simulated busy dates (in a real app, this would come from your backend)
const BUSY_DATES = [
    new Date(2025, 4, 27), // May 27, 2025 (month is 0-indexed)
    new Date(2025, 4, 30), // May 30, 2025
    new Date(2025, 5, 3), // June 3, 2025
];

// Property types
const PROPERTY_TYPES = [
    { value: "single-family", label: "Single Family Home" },
    { value: "condo", label: "Condominium" },
    { value: "townhouse", label: "Townhouse" },
    { value: "multi-family", label: "Multi-Family Home" },
    { value: "commercial", label: "Commercial Property" },
];

// Inspection types
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

    // Get tomorrow's date as minimum selectable date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Get max date (3 months from now)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    // Function to check if a date is busy/unavailable
    const isDateBusy = (date: Date) => {
        return BUSY_DATES.some(
            (busyDate) => busyDate.toDateString() === date.toDateString(),
        );
    };

    // Function to disable weekends, past dates, and busy dates
    const isDateAvailable = (date: Date) => {
        const day = date.getDay();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Not Sunday (0) or Saturday (6), not in the past, and not a busy date
        return day !== 0 && day !== 6 && date >= today && !isDateBusy(date);
    };

    // Update available times when date changes
    useEffect(() => {
        if (selectedDate) {
            // Simulate different availability for different dates
            const dayOfWeek = selectedDate.getDay();
            let timesForDay = [...TIME_SLOTS];

            // Simulate some dates having fewer available slots
            if (dayOfWeek === 1) {
                // Monday - busier day
                timesForDay = timesForDay.map((slot) => ({
                    ...slot,
                    available:
                        slot.time !== "11:00 AM" && slot.time !== "2:00 PM",
                }));
            } else if (dayOfWeek === 5) {
                // Friday - fewer slots
                timesForDay = timesForDay.map((slot) => ({
                    ...slot,
                    available:
                        slot.time !== "8:00 AM" && slot.time !== "4:00 PM",
                }));
            }

            setAvailableTimesForDate(timesForDay);

            // Clear selected time if it's not available for the new date
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
            // Show better error message
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
            // api call simulation
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const bookingData = {
                ...data,
                selectedDate: selectedDate.toDateString(),
                selectedTime,
                bookingId: `INS-${Date.now()}`,
                submittedAt: new Date().toISOString(),
            };

            console.log("Inspection booking submitted:", bookingData);

            // TODO: If demo is approved, hit endpoint to save booking in db.
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
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold text-blue-900 mb-3">
                            What happens next?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        1
                                    </div>
                                    <div>
                                        <p className="font-medium text-blue-900">
                                            Confirmation Call
                                        </p>
                                        <p className="text-blue-800 text-sm">
                                            We'll call within the next business day to confirm
                                            details
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        2
                                    </div>
                                    <div>
                                        <p className="font-medium text-blue-900">
                                            Email Instructions
                                        </p>
                                        <p className="text-blue-800 text-sm">
                                            Preparation checklist and what to
                                            expect
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        3
                                    </div>
                                    <div>
                                        <p className="font-medium text-blue-900">
                                            Inspection Day
                                        </p>
                                        <p className="text-blue-800 text-sm">
                                            Professional inspection at scheduled
                                            time
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        4
                                    </div>
                                    <div>
                                        <p className="font-medium text-blue-900">
                                            Detailed Report
                                        </p>
                                        <p className="text-blue-800 text-sm">
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
                />

                <div className="max-w-6xl mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {/* left column with calendar and time selection*/}
                        <div className="space-y-6">
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    Select Date
                                </h3>{" "}
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
                                            if (!isDateAvailable(date)) {
                                                return "unavailable-date";
                                            }
                                            if (isDateBusy(date)) {
                                                return "busy-date";
                                            }
                                            return "available-date";
                                        }}
                                        renderDayContents={(day, date) => {
                                            const isBusy = isDateBusy(date);
                                            const isAvailable =
                                                isDateAvailable(date);

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
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
                                        * Inspections are available Monday
                                        through Friday. Weekend appointments may
                                        be available upon request.
                                    </p>
                                </div>
                            </Card>

                            <Card className="p-6">
                                {" "}
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    Select Time
                                    {selectedDate && (
                                        <span className="text-sm font-normal text-gray-500">
                                            for{" "}
                                            {selectedDate.toLocaleDateString()}
                                        </span>
                                    )}
                                </h3>
                                {selectedDate ? (
                                    <>
                                        <div className="grid grid-cols-3 gap-3 time-slots-grid">
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
                                                                ? "selected bg-blue-600 text-white border-blue-600"
                                                                : slot.available
                                                                ? "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
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
                                        {selectedDate && selectedTime && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
                                            >
                                                <p className="text-green-800 font-medium">
                                                    Selected:{" "}
                                                    {selectedDate.toLocaleDateString()}{" "}
                                                    at {selectedTime}
                                                </p>
                                            </motion.div>
                                        )}
                                    </>
                                ) : (
                                    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                        <div className="text-center">
                                            <Info className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <p className="text-gray-500">
                                                Please select a date first
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        </div>

                        {/* Right Column - Form */}
                        <div className="space-y-6">
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-600" />
                                    Contact Information
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            {...register("firstName")}
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            {...register("lastName")}
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            {...register("phone")}
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="(616) 555-0123"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Home className="w-5 h-5 text-blue-600" />
                                    Property Information
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Property Address *
                                    </label>
                                    <input
                                        {...register("propertyAddress")}
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="123 Main Street, Grand Rapids, MI 49503"
                                    />
                                    {errors.propertyAddress && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.propertyAddress.message}
                                        </p>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Property Type *
                                        </label>
                                        <select
                                            {...register("propertyType")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.propertyType.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Inspection Type *
                                        </label>
                                        <select
                                            {...register("inspectionType")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.inspectionType.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Special Requests or Notes
                                    </label>
                                    <textarea
                                        {...register("specialRequests")}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                        className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-gray-700"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="/terms"
                                            className="text-blue-600 hover:underline"
                                        >
                                            terms and conditions
                                        </a>{" "}
                                        and authorize {contactInfo.company} to
                                        contact me regarding this inspection.
                                    </label>
                                </div>
                                {errors.agreedToTerms && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.agreedToTerms.message}
                                    </p>
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
                            {/* Booking Summary */}
                            {(selectedDate ||
                                selectedTime ||
                                watch("inspectionType")) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6"
                                >
                                    <Card className="p-6 bg-blue-50 border-blue-200">
                                        <h4 className="font-semibold text-blue-900 mb-3">
                                            Booking Summary
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            {selectedDate && (
                                                <div className="flex justify-between">
                                                    <span className="text-blue-700">
                                                        Date:
                                                    </span>
                                                    <span className="font-medium text-blue-900">
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
                                            )}
                                            {selectedTime && (
                                                <div className="flex justify-between">
                                                    <span className="text-blue-700">
                                                        Time:
                                                    </span>
                                                    <span className="font-medium text-blue-900">
                                                        {selectedTime}
                                                    </span>
                                                </div>
                                            )}
                                            {watch("inspectionType") && (
                                                <div className="flex justify-between">
                                                    <span className="text-blue-700">
                                                        Type:
                                                    </span>
                                                    <span className="font-medium text-blue-900">
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
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
