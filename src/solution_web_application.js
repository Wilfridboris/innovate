import React,{useState,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import MarkDown from 'markdown-to-jsx'
import Head from './Head'

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
        <div>
            <Head/>
            <Helmet>
                <title>KB Studio Solutions | web applications</title>
                <meta name="description" content="legrowtech web applications" />
            </Helmet>
        
            <MarkDown>
                {status()}
            </MarkDown>

        </div>
    )
}
