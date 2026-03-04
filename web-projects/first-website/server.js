

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
app.use (express.json());

app.post('/api/gifts', async (req, res) => {
  const { recipientName, headline, font, backgroundColor,textColor , password } = req.body;

  const { data, error } = await supabase
    .from('gifts')
    .insert([
      { recipient_name: recipientName, headline, font, background_color: backgroundColor, text_color: textColor, password }
    ])
      .select();


if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ gift: data[0] });
});