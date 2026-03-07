"use client";

export default function LiveChatCard() {
  function openTidio() {
    // @ts-ignore
    if (window.tidioChatApi) {
      // @ts-ignore
      window.tidioChatApi.open();
    } else {
      console.warn("Tidio is not loaded yet");
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition">
      <div className="text-md text-gray-500 mb-3">Instant</div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Chat with our support team directly from the website for quick help.
      </p>

      <button
        type="button"
        onClick={openTidio}
        className="text-md font-medium text-primary hover:underline"
      >
        Get Live Support
      </button>
    </div>
  );
}
