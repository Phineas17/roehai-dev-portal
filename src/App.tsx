import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Quickstart } from "@/pages/Quickstart";
import { Auth } from "@/pages/Auth";
import { Sdk } from "@/pages/Sdk";
import { AriaReference } from "@/pages/reference/Aria";
import { LeaReference } from "@/pages/reference/Lea";
import { WebhooksReference } from "@/pages/reference/Webhooks";
import { WebhookExpressGuide } from "@/pages/guides/WebhookExpress";
import { ZapierGuide } from "@/pages/guides/Zapier";
import { N8nGuide } from "@/pages/guides/N8n";
import { AIAssistantsGuide } from "@/pages/guides/AIAssistants";
import { Errors } from "@/pages/Errors";
import { Changelog } from "@/pages/Changelog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quickstart" element={<Quickstart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sdk" element={<Sdk />} />
          <Route path="/sdk/reference" element={<Sdk />} />
          <Route path="/reference/aria" element={<AriaReference />} />
          <Route path="/reference/lea" element={<LeaReference />} />
          <Route path="/reference/webhooks" element={<WebhooksReference />} />
          <Route path="/guides/webhook-express" element={<WebhookExpressGuide />} />
          <Route path="/guides/zapier" element={<ZapierGuide />} />
          <Route path="/guides/n8n" element={<N8nGuide />} />
          <Route path="/guides/llm" element={<AIAssistantsGuide />} />
          <Route path="/guides/assistants-ia" element={<AIAssistantsGuide />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="/changelog" element={<Changelog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
