import React, {useState, useEffect} from 'react'
import { Text, Image, Card, PostCard, Details, GlobalStyle} from './style'
import {api} from '../../services/api'

export function Main(){
    const [list, setList] = useState([])
    useEffect(() => {
        api.get().then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return(
        <div>
            <GlobalStyle/>
            <Card>
                {list.map((item, index) => (
                    <PostCard>
                    <Text key={index}>{item.name}</Text>
                    <Image src={item.image}/>
                    <Details><strong>House:</strong> {item.house}</Details>
                    <Details><strong>Species:</strong> {item.species}</Details>
                    </PostCard>
                    
                ) )}
            </Card>
        </div>
    )
}