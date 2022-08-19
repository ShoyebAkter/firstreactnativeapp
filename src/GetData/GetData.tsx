import React, { FC, useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { IDataType } from '../../types/datatypes';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const GetData: FC = () => {
    const [data, setData] = useState<
        Array<IDataType>
    >([]);

    
    useEffect(() => {
        const showData = async (): Promise<void> => {
            const querySnapshot = await getDocs(collection(db, "users"))
            querySnapshot.forEach((doc) => {
                setData(prev => [...prev, { name: doc.data().name, date: doc.data().date, image: doc.data().image }]);
            });
        }
        showData()
    }, [])
    return (
        <ScrollView>
            {
                data.map((singleData, index) => {
                    return (
                        <View style={{marginTop:5,flex:1,justifyContent:"center",alignItems: "center"}} key={index}>
                            <Image
                                source={{ uri: singleData.image }}
                                style={{width: 200, height: 150}}
                            />
                            <View>
                            <Text>Book name: {singleData.name}</Text>
                            <Text>Date: {singleData.date}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default GetData