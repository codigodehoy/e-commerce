import { ResultPreview } from './ResultPreview'
import { SortFilter} from "./SortFilter/SortFilter"
import './ResultInfoBar.css'

function ResultInfoBar () {
    return (
        <div className='ResultInfoBarContainer'>
            <ResultPreview />
            <SortFilter />
        </div>
    )
}

export { ResultInfoBar }