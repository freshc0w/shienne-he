import { useEffect, useRef, useState } from "react";
import type React from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
  delay?: number;
  isHover?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 750,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  delay = 500,
  isHover = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);
  const hasShownRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isHover is true, show based on hover state
  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = isHover ? isHovered : !isView || isInView;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    const annotation = annotate(element, annotationConfig);
    annotationRef.current = annotation;

    const resizeObserver = new ResizeObserver(() => {
      if (hasShownRef.current && !isHover) {
        annotation.hide();
        annotation.show();
      }
    });

    resizeObserver.observe(element);
    resizeObserver.observe(document.body);

    return () => {
      if (element) {
        annotate(element, { type: action }).remove();
        resizeObserver.disconnect();
      }
    };
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    isHover,
  ]);

  useEffect(() => {
    if (!shouldShow) {
      if (annotationRef.current && hasShownRef.current && isHover) {
        const annotation = annotationRef.current;
        annotation.hide();
        setTimeout(() => {
          hasShownRef.current = false;
        }, animationDuration);
      } else if (annotationRef.current && hasShownRef.current && !isHover) {
        annotationRef.current.hide();
        hasShownRef.current = false;
      }
      return;
    }

    const timeoutId = setTimeout(
      () => {
        if (annotationRef.current) {
          annotationRef.current.show();
          hasShownRef.current = true;
        }
      },
      isHover ? 0 : delay,
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [shouldShow, delay, isHover, animationDuration]);

  return (
    <span
      ref={elementRef}
      className="relative inline bg-transparent"
      onMouseEnter={() => isHover && setIsHovered(true)}
      onMouseLeave={() => isHover && setIsHovered(false)}
    >
      {children}
    </span>
  );
}
