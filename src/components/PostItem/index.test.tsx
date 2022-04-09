import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Component from './index'
import { useSearch } from 'hooks/'
import toJson from 'enzyme-to-json'
import { QueryClient, QueryClientProvider } from 'react-query'
Enzyme.configure({ adapter: new Adapter() })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
// Solves TypeScript Errors
const mockedUseSearch = useSearch as jest.Mock<any>

// Mock the module
jest.mock('../../hooks/')

const Element = (id: string): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Component id={id} />
  </QueryClientProvider>
)

describe('<PostItem />', () => {
  beforeEach(() => {
    mockedUseSearch.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('renders', () => {
    mockedUseSearch.mockImplementation(() => ({
      isLoading: false,
      data: {
        by: 'avestura',
        descendants: 81,
        id: 30965352,
        kids: [30966907, 30966008, 30966814],
        score: 325,
        time: 1649479929,
        title: 'Persepolis of ancient Persia rendered in WebGL',
        type: 'story',
        url: 'https://persepolis.getty.edu'
      }
    }))
    const tree = mount(Element('30965352'))
    expect(toJson(tree)).toMatchSnapshot()
  })
})
