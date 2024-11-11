import { Connection } from "@solana/web3.js"
import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <button
        onClick={async () => {
          const connection = new Connection("https://api.devnet.solana.com")
        }}
      >
        Should not break
      </button>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
