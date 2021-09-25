export const headerText = {
    title: 'Next generation digital banking',
    paragraph: 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. ',
    buttonText: 'Request Invite'
}

export const virtuesText = {
    reasonTitle: 'Why choose Easybank?',
    reasonParagraph: 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'
}

interface ReasonText {
    img?: string;
    title?: string;
    paragraph?: string;
}

export const reasonListText: ReasonText[] = [
    {
        title: 'Online Banking',
        paragraph: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
        img: 'icon-online.svg',
    },
    {
        title: 'Simple Budgeting',
        paragraph: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
        img: 'icon-budgeting.svg',
    },
    {
        title: 'Fast Onboarding',
        paragraph: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
        img: 'icon-onboarding.svg',
    },
    {
        title: 'Open API',
        paragraph: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
        img: 'icon-api.svg',
    },
]

interface ArticleText {
    title: string;
    cardText: ArticleCardText[]
}
interface ArticleCardText {
    img?: string;
    author?: string;
    title: string;
    paragraph: string;
}
export const articlesText: ArticleText = {
    title: 'Lastest Articles',
    cardText: [
        {
            img: 'image-currency.jpg',
            author: 'By Claire Robinson',
            title: 'Receive money in any currency with no fees',
            paragraph: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
        },
        {
            img: 'image-restaurant.jpg',
            author: 'By Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            paragraph: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
        },
        {
            img: 'image-plane.jpg',
            author: 'By Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            paragraph: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
        },
        {
            img: 'image-confetti.jpg',
            author: 'By Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            paragraph: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
        },
    ]
}


interface SocialIcons { 
    img: string;
    alt?: string;
}

export const footerSocialIcons: SocialIcons[] = [
    {
        img: 'icon-facebook.svg',
        alt: 'facebook',
    },
    {
        img: 'icon-youtube.svg',
        alt: 'youtube',
    },
    {
        img: 'icon-twitter.svg',
        alt: 'twitter',
    },
    {
        img: 'icon-pinterest.svg',
        alt: 'pinterest',
    },
    {
        img: 'icon-instagram.svg',
        alt: 'instagram',
    },
]