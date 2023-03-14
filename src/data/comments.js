export const getCommentsData = async () => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "Moeez Abdul",
            },
            desc: "@Jan Shah, did you find this article useful?",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "Jan Shah",
            },
            desc: "Yes I did mate, Thank You!",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "12",
            user: {
                _id: "b",
                name: "Friad Hamakhurshid",
            },
            desc: "keep it up bro <3",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "13",
            user: {
                _id: "c",
                name: "Rahmath Mozumder",
            },
            desc: "I'm always interested in your content :)",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
    ];
};