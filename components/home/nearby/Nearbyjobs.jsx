import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';


import { COLORS, SIZES } from '../../../constants'
import styles from './nearbyjobs.style'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch';
const sampleResponse = require('../../../utils/data.json');


const Nearbyjobs = () => {
  const router = useRouter();
  
  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React Developer',
  //   num_pages: 1
  // })
  const data = sampleResponse.data;
  const isLoading = false;
  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ): (
          data?.map((job) => (
            <NearbyJobCard 
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={()=> router.push(`/job-details/iXki4pXSSRwAAAAAAAAAAA==`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs;