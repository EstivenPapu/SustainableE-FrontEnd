<script>
import { getCountryByName } from '../services/energyService';

export default {
  data() {
    return {
      country: '',
      result: null,
    };
  },
  methods: {
    async searchCountry() {
      try {
        this.result = await getCountryByName(this.country);
      } catch (error) {
        console.error('Error buscando el país:', error);
      }
    },
  },
};
</script>
