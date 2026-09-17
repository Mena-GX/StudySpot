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
  const [filter, setFilter] = useState('all');
  const filteredSpots = studySpots.filter((spot) => {
    const matchesSearch = spot.name.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
          filter === 'all' ||
          (filter === 'quiet' && spot.quiet) ||
          (filter === 'outlets' && spot.outlets) ||
          (filter === 'wifi' && spot.wifi);

        return matchesSearch && matchesFilter;
  });

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

      <View style={styles.filtersContainer}>
        <Pressable
        style={[
          styles.filterButton,
          filter === 'all' && styles.activeFilter,
        ]}
        onPress={() => setFilter('all')}
        >
          <Text>All</Text>
        </Pressable>

        <Pressable
        style={[
          styles.filterButton,
          filter === 'quiet' && styles.activeFilter,
        ]}
        onPress={() => setFilter('quiet')}
        >
          <Text>Quiet</Text>
        </Pressable>

        <Pressable
        style={[
          styles.filterButton,
          filter === 'wifi' && styles.activeFilter,
        ]}
        onPress={() => setFilter('wifi')}
        >
          <Text>Wifi</Text>
        </Pressable>

        <Pressable
        style={[
          styles.filterButton,
          filter === 'outlets' && styles.activeFilter,
        ]}
        onPress={() => setFilter('outlets')}>
          <Text>Outlets</Text>
        </Pressable>
      </View>
      

      <FlatList data={filteredSpots} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Pressable
            onPress={() => toggleFavorite(item.id)}
          >
            <Text style={styles.favorite}>
              {favorites.includes(item.id) ? '★' : '☆'}
            </Text>
          </Pressable>

          <Text style={styles.cardTitle}>{item.name}</Text>

          <Text style={styles.location}>
            {item.location}
          </Text>

          <Text> {item.rating}</Text>

          <View style={styles.amenities}>
            {item.quiet && (
              <Text style={styles.amentity}>Quiet</Text>
              )}
            {item.outlets && (
              <Text style={styles.amentity}>Outlets</Text>
              )}
            {item.wifi && (
              <Text style={styles.amentity}>Wifi </Text>
              )}
          </View>

        </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    // justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    width: '100%',
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

  amenities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  
  amentity: {
    backgroundColor: '#EEEEEE',
    padding: 6,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },

  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 8,
  },

  activeFilter: {
    borderWidth: 2,
    borderColor: '#000000',
  },
});
