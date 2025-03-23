import accountApiRequest from "@/apiRequests/account";
import ProfileForm from "@/app/me/profile-form";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hồ sơ người dùng",
};

export default async function MeProfile() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");
  // Vì dùng cookie nên api này không được cached trên server
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

  const result = await accountApiRequest.me(sessionToken?.value ?? "");
  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-md py-3 px-6">
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Hồ sơ người dùng
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ProfileForm profile={result.payload.data} />
        </div>
      </div>
    </div>
  );
}
