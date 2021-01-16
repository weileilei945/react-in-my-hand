/**
 * @file jest 自动化单元测试
 * @author weileilei
 */
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { // eslint-disable-line
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
