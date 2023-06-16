"use client";

import { DateTimePicker } from "@/components/ui/date-time-picker/date-time-picker";
import { TimePicker } from "@/components/ui/date-time-picker/time-picker";

export default function Home() {
  return (
    <main className="p-8 space-y-8">
      <p>Date Time Picker</p>

      <DateTimePicker granularity={"minute"} />

      <p>Date Picker</p>

      <DateTimePicker />

      <p>Time Picker</p>

      <TimePicker />
    </main>
  );
}
