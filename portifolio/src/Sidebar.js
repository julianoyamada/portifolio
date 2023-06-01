import SocialNetworks from './SocialNetworks';

import Avatar from './img/juju.jpg.jpeg'

import Information from './information';



import './styles/Sidebar.css';


const Sidebar = () => {
    return(
    <aside className="sidebar">
        <img src={Avatar} alt="Juliano Arruda"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <Information />
        <a href="https://docs.google.com/document/d/1FmjbZ-76kxlndK57CqUJc5yQafZu-95ho7HKO4N3iRU/edit" className="btn">
            Download curriculo
        </a>
    </aside>
    )
}
export default Sidebar