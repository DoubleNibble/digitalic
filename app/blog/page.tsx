import ConstructionPage from "@/components/ConstructionPage";

export default function BlogPage() {
  return (
    <ConstructionPage icon="fas fa-newspaper" status="SUBDOMAIN PENDING">
      Our blog is hosted on a dedicated subdomain, built with a static site generator for maximum performance and minimal attack surface. The link will be activated here once published.
    </ConstructionPage>
  );
}
