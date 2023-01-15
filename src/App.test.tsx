import { renderWithInternationalization, screen, setupTests } from "./test-utils.js";
import "@testing-library/jest-dom";
import { FormattedDate } from "react-intl";

const FormatDateView = () => {
    return (
        <div data-testid="date-display">
            <FormattedDate value="2023-05-19" timeZone="utc" day="2-digit" month="2-digit" year="numeric" />
        </div>
    );
};

setupTests();

test("it should render FormattedDate and have a formatted en date", () => {
    renderWithInternationalization(<FormatDateView />);
    expect(screen.getByTestId("date-display")).toHaveTextContent("05/19/2023");
});

test("it should render FormattedDate and have a Dutch formatted nl date", () => {
    renderWithInternationalization(<FormatDateView />, { locale: "nl" });
    expect(screen.getByTestId("date-display")).toHaveTextContent("19-05-2023");
});
