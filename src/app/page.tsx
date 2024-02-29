import { HomePage } from "@/components/mainBoard/homePage/page";
export const dynamic = "force-dynamic";
export default async function Page() {
  return (
    <div className='main-board-container'>
        <HomePage></HomePage>
    </div>
  )
}
