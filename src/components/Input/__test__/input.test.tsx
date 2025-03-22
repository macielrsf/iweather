import { render } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should not show ActivityIndicator when isLoading is false", () => {
    const { queryByTestId } = render(<Input isLoading={false} />);

    const activityIndicator = queryByTestId("loading-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should show ActivityIndicator when isLoading is true", () => {
    const { getByTestId } = render(<Input isLoading />);

    const activityIndicator = getByTestId("loading-indicator");
    
    expect(activityIndicator).toBeTruthy();
  });
});