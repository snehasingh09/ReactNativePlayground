import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTree, faTractor, faStreetView, faRoad } from '@fortawesome/free-solid-svg-icons'

export const initLibrary = () => {
    library.add(fab, faTree, faTractor, faStreetView, faRoad);
}
