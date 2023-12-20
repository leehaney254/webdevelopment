const mongoose = require('mongoose');

main().then(() => {
  console.log('CONNECTED!!!');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}


const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter'
  })
  u.addresses.push({
    street: '123 Sesame st.',
    city: 'New York',
    state: 'NY',
    country: 'USA'
  })
  const res = await u.save()
  console.log(res)
}

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '99 3rd St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }
  )
  const res = await user.save()
  console.log(res)
}

addAddress('630dde7db1428e5afcd9a14b');