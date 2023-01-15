import IntlPolyfill from "intl";
import { render as rtlRender } from "@testing-library/react";
import { IntlProvider } from "react-intl";

const hasFullICU = () => {
    // That's the recommended way to test for ICU support according to Node.js docs
    try {
        const january = new Date(9e8);
        const en = new Intl.DateTimeFormat("en", { month: "long" });
        return en.format(january) === "January";
    } catch (err) {
        return false;
    }
};

export const setupTests = () => {
    if (hasFullICU()) {
        Intl.NumberFormat.format = new Intl.NumberFormat("en").format;
        Intl.DateTimeFormat.format = new Intl.DateTimeFormat("en").format;
    } else {
        global.Intl = IntlPolyfill;
    }
};

function renderWithInternationalization(ui, { locale = "en-us", ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <IntlProvider locale={locale}>{children}</IntlProvider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithInternationalization };
