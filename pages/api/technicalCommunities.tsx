export default function handler(req, res) {
    // Fetch technical communities from your database or any other source
    const technicalCommunities = [
        { id: 1, name: "Technical Community A" },
        { id: 2, name: "Technical Community B" },
        // Add more communities as needed
    ];
    res.status(200).json(technicalCommunities);
}