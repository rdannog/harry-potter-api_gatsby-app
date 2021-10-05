import React, {useState, useEffect} from 'react'
import { Title, Image, Card, PostCard, DetailBox, Text} from './style'
import {api} from '../../services/api'


export function Main(){
    const [list, setList] = useState([])
    useEffect(() => {
        api.get().then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return(
        <div>
            <Card>
                {list.map((item, index) => (
                    <PostCard>
                        <Title key={index}>{item.name}</Title>
                        <Image src={item.image}/>
                        <DetailBox>
                            <Text><strong>Birthday:</strong> {item.dateOfBirth}</Text>
                            <Text><strong>House:</strong> {item.house}</Text>
                        </DetailBox>
                    </PostCard>
                    
                ) )}
            </Card>
        </div>
    )
}