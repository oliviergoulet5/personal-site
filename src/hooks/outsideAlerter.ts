import React, { useEffect, useRef, useState } from "react";

export function useOutsideAlerter<T extends HTMLElement>(initialValue: boolean) {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [ref])

    return { ref, visible, setVisible };
}