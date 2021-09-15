import { useRouter } from 'next/router';

export default function CampaignViewPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <h1>
        view campaign {id}
      </h1>
    </main>
  );
}