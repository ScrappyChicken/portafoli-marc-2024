import "../components/LandingPageComp/landingPage.css"
import Skills from "../components/LandingPageComp/skills.jsx"

export default function landingPage(){

return(

//CODI HTML ORIGINAL: https://codepen.io/mariosmaselli/pen/popWjr
<div class="resume-wrapper">
	<section class="profile section-padding">
		<div class="container">
			<div class="picture-resume-wrapper">
        <div class="picture-resume">
        <span><img src="/assets/img/logo.png" alt="" /></span>
        <svg version="1.1" viewBox="0 0 350 350">
  
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
    </filter>
  </defs>
  


</svg>
      </div>
         <div class="clearfix"></div>
 </div>
      <div class="name-wrapper">
        <h1>Marc <br/>Vegas Vidal</h1>
      </div>
      <div class="clearfix"></div>
      <div class="contact-info clearfix">
      	<ul class="list-titles">
      		<li>Telefono</li>
      		<li>Mail</li>
      		<li>Estudios</li>
      	</ul>
        <ul class="list-content ">
        	<li>+34 555 555 555</li> 
        	<li><a herf="mailto:1209marc@gmail.com">1209marc@gmail.com</a></li> 
        	<li>IES Emili Darder</li> 
        </ul>
      </div>
      <div class="contact-presentation"> 
      	<p><span class="bold">Aviso: </span>Este currículum web es un proyecto de demostración y no representa una descripción real de mis experiencias profesionales. No debe considerarse como un currículum vitae formal ni utilizado para fines laborales. Si necesitas información real, por favor contáctame directamente.</p>
      </div>
      <div class="contact-social clearfix">
      	<ul class="list-titles">
      		<li>GitHub</li>
      		<li>LinkedIn</li>
      	</ul>
        <ul class="list-content">
      		<li><a href="https://github.com/ScrappyChicken">ScrappyChicken</a></li> 
      		<li><a href="https://www.linkedin.com/in/marc-vegas-bb8291240/">Marc Vegas</a></li> 
      	</ul>
      </div>
		</div>
	</section>
  
  <section class="experience section-padding">
  	<div class="container">
  		<h3 class="experience-title">Experiencia</h3>
      
      <div class="experience-wrapper">
      	<div class="company-wrapper clearfix">
      		<div class="experience-title" style={{color:"#66cc99"}}>Medios Avanzados de Cálculo y Diseño</div> 
          <div class="time">Junio 2021 -  Enero 2022</div> 
      	</div>
        
        <div class="job-wrapper clearfix">
        	<div class="experience-title">Administrador De Sistemas/Help Desk </div> 
          <div class="company-description">
          	<p>Responsable de el correcto funcionamiento de los sistemas de redes, asi como los equipos personales, de las empresas que contrataron el servicio de Medios Avanzados de Cálculo y Diseño.
            Tambien el encargado de la administracion de el sistema de copias de seguridad asi como de el funcionamiento de VoIp tanto internamente como para clientes.</p>  
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
      		<div class="experience-title" style={{color:"#66cc99"}}>Nuncys</div> 
          <div class="time">Marzo 2022 - Junio 2022</div> 
      	</div>
        
         <div class="job-wrapper clearfix">
        	<div class="experience-title">Practicas</div> 
          <div class="company-description">
          	<p>Practicas de grado medio.</p>  
          </div>
        </div>
        
        
      </div>

      <div class="section-wrapper clearfix">
      	<h3 class="section-title" style={{color:"#66cc99"}}>Skills</h3> 
        	<ul>
            <Skills />
        	</ul>
        
      </div>
      
      <div class="section-wrapper clearfix">
        <h3 class="section-title">Hobbies</h3>  
        <p>Me gusta el futbol, el cine y el teatro. Tambien soy un entusiasta de el canto y la danza de Rock&Roll</p>
        
        <p>Duermo con una almohada en los pies y cerca del radiador. Aspiro a ser un gran campeon jugando al ajedrez</p> 
      </div>
      
  	</div>
  </section>
  
  <div class="clearfix"></div>
</div>
)}
