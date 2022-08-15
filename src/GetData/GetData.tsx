import React, { FC, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { IDataType } from '../../types/datatypes';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const GetData: FC = () => {
    const [data, setData] = useState<
        Array<IDataType>
    >([]);

    useEffect(() => {
        const showData = async (): Promise<void> => {
            const querySnapshot = await getDocs(collection(db, "users"));
            // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                setData(prev => [...prev, { name: doc.data().name, date: doc.data().date, image: doc.data().image }]);
            });
        }
        showData()
    }, [])
    return (
        <View>
            {
                data.map((singleData, index) => {
                    return (
                        <View style={{display:"flex"}} key={index}>
                            <Image
                                source={{ uri: singleData.image }}
                                style={{width: 200, height: 75}}
                            />
                            <View>
                            <Text>Book name: {singleData.name}</Text>
                            <Text>Date: {singleData.date}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default GetData