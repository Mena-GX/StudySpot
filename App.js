import { StyleSheet, Text, View, FlatList, TextInput, Pressable,} from 'react-native';
import { useState } from 'react';






const studySpots = [
  {
    id: '1',
    name: 'Newman Library',
    location: 'Main Campus',
    quiet: true,
    outlets: true,
    wifi: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Campus Coffee Shop',
    location: 'Student Center',
    quiet: false,
    outlets: true,
    wifi: true,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Engineering Building',
    location: 'North Campus',
    quiet: true,
    outlets:true,
    wifi: true,
    rating: 4.7,
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const filteredSpots = studySpots.filter((spot) =>
  spot.name.toLowerCase().includes(search.toLowerCase())
  );

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    if(favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StudySpot</Text>

      <TextInput
        style={styles.search}
        placeholder="Search study spots..."
        value={search}
        onChangeText={setSearch}
      />
      

      <FlatList data={filteredSpots} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.name}</Text>

          <Text style={styles.location}>
            {item.location}
          </Text>

          <Text> {item.rating}</Text>

          <Text>
            {item.quiet ? 'Quiet' : 'Social'}
          </Text>
        </View>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  location: {
    color: '#666',
    marginBottom: 10,
  },

  search : {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});
