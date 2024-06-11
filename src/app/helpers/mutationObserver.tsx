export default function waitForElementToExist(selector: string): Promise<Element> {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      if (element) {
        return resolve(element);
      }
      const observer = new MutationObserver(() => {
        const updatedElement = document.querySelector(selector);

        if (updatedElement) {
          resolve(updatedElement);
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    });
  }