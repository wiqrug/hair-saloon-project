import { useState } from "react";

const useClipboard = () => {
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const hideFeedbackAfterDelay = () => {
    setTimeout(() => {
      setShowCopyFeedback(false);
    }, 2000); // Hide after 3 seconds
  };

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setFeedbackText(`${text} Copied to Clipboard`);
      setShowCopyFeedback(true);
      hideFeedbackAfterDelay();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return { showCopyFeedback, copyTextToClipboard, feedbackText };
};

export default useClipboard;
