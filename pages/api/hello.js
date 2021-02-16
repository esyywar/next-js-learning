export default function handler(req, res) {
    res.status(200).json({ msg: "Hello!"})
}

/* Example application to post form date */
export default function formHandler(req, res) {
    const email = req.body.email

    /* ... save to database */
}

/* Note: api routes can be dynamically generated too! */