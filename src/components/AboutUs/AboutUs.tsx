import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
export function AboutUs() {
    return (
        <>
            <div className="container" style={{ marginTop: '2rem' }}>
                <div className="justify-content-md-center row">
                    <div className="col-sm-12 col-md-9">
                        <h3>El arte de la caza</h3>
                        <p>Se denomina cacería a la actividad y el resultado de cazar: la búsqueda y persecución de animales con el fin de atraparlos o matarlos. La cacería puede llevarse a cabo para obtener alimento o con un fin deportivo o recreativo.</p>
                    </div>
                    <Cards titulo="Caza Mayor"
                        cuerpo=" La caza mayor es aquella en que se persigue a los animales catalogados como tales; en países como España son el jabalí, ciervo. gamo, cabra montés, corzo, muflón y arrui, y en ocasiones también pueden incluirse el lobo y el oso."
                        url='src/assets/caza mayor.jpg'
                    />
                    <Cards titulo="Caza Menor"
                        cuerpo=" Es la modalidad utilizada para las tiradas de tórtolas, palomas, zorzales y aves acuáticas, pudiendo realizarse en los pasos naturales o bien utilizando cimbeles o señuelos vivos o artificiales.Usuamente se utilizan perros o armas de calibre pequeño"
                        url='src/assets/caza menor.jpg'
                    />
                    <Cards titulo="Pesca"
                        cuerpo=" La actividad pesquera y acuícola consiste en la captura y cría de peces, crustáceos, moluscos y otros organismos de aguas saladas y dulces para aprovechar algunos recursos de la Naturaleza sin transformarlos. Estas actividades proporcionan alimento."
                        url='src/assets/pesca2.jpg'
                    />


                </div>
            </div>
        </>
    )


}
function Cards(props: { titulo: String; cuerpo: String; url: string }) {
    const { titulo, cuerpo, url } = props;
    return (
        <div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center col-auto">
            <Card style={{ width: '18rem', height: '26rem', margin: '1rem' }}>
                <Card.Img variant="center" src={url} style={{ margin: '0.5rem', maxHeight: '160px' }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {cuerpo}
                    </Card.Text>
                </Card.Body>
            </Card></div>

    )
}