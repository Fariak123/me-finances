import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8">
      <div className="flex items-center justify-between pw-8">
        <div>Top leading</div>
        <div>Top center</div>
        <div>Top trailing</div>
      </div>
      <div className="flex items-center justify-between pw-8">
        <div>Body leading</div>
        <div>Body center</div>
        <div>Body trailing</div>
      </div>
      <div className="flex items-center justify-between pw-8">
        <div>Bottom leading</div>
        <div>Bottom center</div>
        <div>Bottom trailing</div>
      </div>
    </main>
  );
}
