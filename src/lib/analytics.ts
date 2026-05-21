declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string) => {
  console.log("Evento enviado:", eventName);

  window.gtag?.("event", eventName, {
    send_to: "AW-10896515121",
  });
};

export {};