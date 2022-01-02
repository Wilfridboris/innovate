import React,{useState,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import MarkDown from 'markdown-to-jsx'
import Head from './Head'
import ServiceHeader from './components/ServiceHeader';
import Footer from './Footer';

export default function Solution_web_application() {
    const file_name='chapter.md';
    const [post,setPost]=useState('');
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        import (`./markdown/${file_name}`)
        .then(res=>{
            fetch(res.default)
            .then(res=> res.text())
            .then(res=>setPost(res))
        })
        .catch(err=>{
            console.log(err)
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    });
    const status=()=>{
        if (loading) return "## loading"
        if (error) return "##Error!"
        return post
    }

    return (
        <>
    
            <div className="web">
            <Head/>
        
            <Helmet>
                <title>legrowtech Web application</title>
                <meta name="description" content="build web applications with legrowtech" />
            </Helmet>
          
                    <div className="legrowtech-services-web">

                                    <ServiceHeader
                                    
                                    title="web Application"
                                    description="We Combine all technologies to build fast and secure App"
                        
                                   />
                                   
        <div className="services-web-section">
        
                <div className="web-section" >
                    <h3 className="web-title">Web</h3>
                    <p className="web-bottom-title">Core keys to your Success</p>
                    <div className="web-section-inside">
                                <div className="web-inside">
                                        <h3>Secure</h3>
                                        <p>because right now you need to secure data we commit to provide the last in ee ofd securoity to satisfy you need</p>
                                </div>
                                <div className="web-inside">
                                        <h3>Moderm && Responsive</h3>
                                        <p>because right now you need to secure data we commit to provide the last in ee ofd securoity to satisfy you need</p>
                                </div>
                                <div className="web-inside">
                                        <h3>Fast</h3>
                                        <p>because right now you need to secure data we commit to provide the last in ee ofd securoity to satisfy you need</p>
                                </div>
                                <div className="web-inside">
                                        <h3>Agile</h3>
                                        <p>because right now you need to secure data we commit to provide the last in ee ofd securoity to satisfy you need</p>
                                </div>
                    </div>
                </div>
        </div>
                            {/* <MarkDown>
                                {status()}
                            </MarkDown> */}
                    </div>

        </div>
        <Footer/>
        </>
        
    )
}
