"use client";

import { useEffect, useState } from "react";

type OfficeHours = { open: number; close: number } | null;

// Dubai office schedule (Sunday closed), based on provided timings.
const OFFICE_HOURS: Record<string, OfficeHours> = {
  Monday: { open: 8, close: 18 },
  Tuesday: { open: 8, close: 18 },
  Wednesday: { open: 8, close: 18 },
  Thursday: { open: 8, close: 18 },
  Friday: { open: 8, close: 18 },
  Saturday: { open: 9, close: 17 },
  Sunday: null,
};

function isOfficeOpenNowInDubai(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dubai",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sunday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  const schedule = OFFICE_HOURS[weekday];
  if (!schedule) return false;

  const nowMinutes = hour * 60 + minute;
  const openMinutes = schedule.open * 60;
  const closeMinutes = schedule.close * 60;
  return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
}

const DubaiDestinationsMap = () => {
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);

  useEffect(() => {
    const updateStatus = () => setIsOfficeOpen(isOfficeOpenNowInDubai());
    updateStatus();
    const timer = window.setInterval(updateStatus, 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="po-dubai-map">
      <img src="/assets/images/v2/pages/prestige-map.webp" alt="Dubai destinations map" />
      <div
        className={`po-map-blink-marker po-map-jump-marker ${isOfficeOpen ? "is-open" : "is-closed"}`}
        style={{ top: "56%", right: "60%" }}
        aria-label={`Dubai Marina (${isOfficeOpen ? "Office open" : "Office closed"})`}
        role="img"
      >
        <span className="po-map-blink-dot" />
        <span className="po-map-blink-pulse" />
        <span className="po-map-blink-pulse po-map-blink-pulse--delayed" />
      </div>
    </div>
  );
};

export default DubaiDestinationsMap;
