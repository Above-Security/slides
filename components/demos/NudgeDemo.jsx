"use client";

import NudgeToast from "../nudge/NudgeToast";

export default function NudgeDemo() {
    return (
        <NudgeToast
            title="Security Alert"
            subtitle="Sensitive Data Download"
            body="You're downloading customer records containing PII. This action is being logged for compliance. Please ensure you have proper authorization."
            primary="I Understand"
            secondary="View Policy"
        />
    );
}