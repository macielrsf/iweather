import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse';
import { render, screen, waitFor, fireEvent } from '@__tests__/utils/customRender';
import { api } from '@services/api';
import { Search } from '@screens/Search';

describe("Screen: Search", () => {
  it("should be able to show city details", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockCityAPIResponse});

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/i));

    expect(option).toBeTruthy();
  });
});