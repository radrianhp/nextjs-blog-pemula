import { render } from '@testing-library/react';
import Navbar from '../component/navbar';

describe('Navbar component', () => {
  it('render navbar correctly', () => {
    render(<Navbar />);
  });
});
