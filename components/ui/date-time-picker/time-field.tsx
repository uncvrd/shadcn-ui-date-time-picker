"use client"

import { DateSegment } from "./date-segment";
import { useRef } from "react";
import { AriaTimeFieldProps, TimeValue, useLocale, useTimeField } from "react-aria";
import { useTimeFieldState } from "react-stately";
import { cn } from "@/lib/utils";

function TimeField(props: AriaTimeFieldProps<TimeValue>) {
	const ref = useRef<HTMLDivElement | null>(null);

	const { locale } = useLocale();
	const state = useTimeFieldState({
		...props,
		locale,
	});
	const {
		fieldProps: { ...fieldProps },
		labelProps,
	} = useTimeField(props, state, ref);

	return (
		<div
			{...fieldProps}
			ref={ref}
			className={cn(
				"inline-flex h-10 w-full flex-1 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				props.isDisabled ? "cursor-not-allowed opacity-50" : "",
			)}
		>
			{state.segments.map((segment, i) => (
				<DateSegment key={i} segment={segment} state={state} />
			))}
		</div>
	);
}

export { TimeField };
