// import './App.css';
import React,{useEffect} from 'react'
import Head from './Head'
import './App.css'
import tech from './img/hero.jpg'
import service from './img/service.png'
import manufacturing from './img/manufacturing.png'


function App() {
  const selection=(e)=>{
    const topicItem=document.querySelectorAll('.new ul li');
    const topicDiv=document.querySelectorAll('.canbehidde');
    for(var i=0;i<topicItem.length;i++){
      topicItem[i].classList.remove('active')
    }
    for(var j=0;j< topicDiv.length;j++){
      topicDiv[j].style.visibility='hidden';
    }
    e.target.classList.add('active');
    if(e.target.textContent==="Manufacturing"){
     document.getElementById('Manufacturing').style.visibility='visible';
    }
    if(e.target.textContent==="Finance"){
      document.getElementById('Finance').style.visibility='visible';
    }
    
  
  }
  useEffect(() => {
    
 
    function lazyloadopcaity(){
      let id=null;
      const sections=document.querySelectorAll('.Home-Second-Panel section');
      let op=0;
      clearInterval(id);
      id=setInterval(frame,160); 
    
      function frame(){
        if(op>=1){
          clearInterval(id)

        }else{
          
          op+=0.1;
          for(var i=0;i<sections.length;i++){
            sections[i].style.opacity=op;
           
           
          }
         
        }
      }
   
    }
    
    function lazylaod(){
      var index=0;
    var elements=document.querySelectorAll('img[data-src]');

    if( index>=elements.length) return ;
    var item=elements[index];
    if((window.scrollY+window.innerHeight)>1300){
      var src = item.getAttribute("data-src");
      item.src = src;
      item.addEventListener('load', function() {
      item.removeAttribute('data-src');     
      });
      // index++;

    }
  }

    lazylaod();
    lazyloadopcaity();
    window.addEventListener('scroll',()=>lazylaod())
   
   
     

    return () => {
      window.removeEventListener('scroll',()=>lazylaod())
      
      
    }
  }, [])
  return (
    <main className="container">
        <Head/>
        <div className="Home-panel" id="home">
        <img src={tech} alt="tech"></img>
          <div className="Home-title">
          
            <a href="#">
            <h1>Getting Started with Us</h1>
            <p>Build Amazing Solution that Support your Bussiness</p>
            <p>Learn more</p>
            </a>
          </div>
       
   
        </div>

        <div className="Home-Second-Panel">
          <h4>What industry?</h4>
            <section>
                  <a href="#">
                    <img></img>
                    <h3>E-commerce</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
                  <a href="#">
                    <img></img>
                    <h3>Finance</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
            <a href="#">
              <img></img>
              <h3>Learning Platform</h3>
              <p>Achieve purchase of your product easilty</p>
              <p>Lear more</p>
            </a>
      </section>
      <section>
      <a href="#">
        <img></img>
        <h3>Media & Entertaiment</h3>
        <p>Achieve purchase of your product easilty</p>
        <p>Lear more</p>
      </a>
</section>
        </div>
        <div className="Home-Third-Panel">
          <h1>Complete  Assistance with shopify Setting & development </h1>
            <section>
              <a href="#">
                <img></img>
                <h3>Finance</h3>
                <p>Achieve purchase of your product easilty</p>
                <p>Lear more</p>
              </a>
          </section>
          <section>
          <a href="#">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
      <section>
          <a href="">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
        </div>

        <div className="Services">
            <h1>services</h1>
            <table>
            <tr>
               <th  className="Service-image">
                <img data-src={service } alt="service"></img>
               
                   
               </th>
               <th className="Service-section">
             
                
               <h1>Our Approach</h1>
               <p>Build Amazing Solution that Support your Bussiness</p>
               <p>Learn more</p>
             
                     
                   
               </th>
           </tr>
             
         </table>
        </div>

        <div className="new">
          <h1>Our Solution everywhere</h1>
          <ul>
            <li className="active" onClick={selection}>Manufacturing</li>
            <li onClick={selection}>Finance</li>
            <li onClick={selection}>Gaming</li>
            <li onClick={selection}>Entertainment</li>
            <li onClick={selection}>Onlie Store</li>
          </ul>

          <div id='Manufacturing' className='new-section canbehidde'>
              <div>
                <img src={manufacturing} alt="{manufacturing"/>
              </div>
              <div>
                <h1>IA Sofware </h1>
            </div>
   

          </div>
          <div id='Finance' className="canbehidde">
          Finance

         </div>

      
       
        
        </div>
     
    </main>
  );
}

export default App;
