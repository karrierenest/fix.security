import PageComponent from "../../components/PageComponent";

export default async function Page({ params }) {
    const slug = params.slug ? params.slug.join("/") : "home";
    return <PageComponent slug={slug} />;
}
