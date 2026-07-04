import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Homepage from '../pages/Hompage'
import Details from '../pages/Details'
import News from '../pages/News'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/terbaru" element={<News endpoint="kumparan-news" title="Berita Terbaru" />} />
                <Route path="/hiburan" element={<News endpoint="hiburan" title="Berita Hiburan" />} />
                <Route path="/gaya-hidup" element={<News endpoint="gaya-hidup" title="Gaya Hidup" />} />
                <Route path="/olahraga" element={<News endpoint="olahraga" title="Olahraga" />} />
                <Route path="/nasional" element={<News endpoint="nasional" title="Berita Nasional" />} />
                <Route path="/internasional" element={<News endpoint="internasional" title="Berita Internasional" />} />
                <Route path="/dunia" element={<News endpoint="dunia" title="Berita Dunia" />} />
                <Route path="/otomotif" element={<News endpoint="otomotif" title="Berita Otomotif" />} />
                <Route path="/politik" element={<News endpoint="politik" title="Berita Politik" />} />
                <Route path='/detail/:link' element={<Details />} />
            </Route>
        </Routes>
    )
}
