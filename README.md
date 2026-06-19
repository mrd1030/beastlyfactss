# BeastlyFacts

BeastlyFacts is a content site focused on honest, practical, and well-researched information about pets and animals — with a special focus on reptiles, rabbits, and small animals.

## Tech Stack

- **Frontend**: Vite + React
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content Management**: Currently Sanity CMS (gradual migration to MDX)
- **MDX Components**: Custom components for structured content (Pros/Cons, Comparison Tables, Fun Facts, etc.)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── mdx/              # Reusable MDX components
│   │   ├── shared/
│   │   ├── ui/
│   │   └── layout/
│   ├── assets/images/        # Content images
│   ├── pages/
│   └── lib/
├── templates/                # MDX content templates
├── public/
└── ...
```

## Content Creation

We use **MDX templates** to keep content consistent and easy to create.

- `templates/GUIDE_TEMPLATE.mdx` — For in-depth guides
- `templates/FUN_FACT_TEMPLATE.mdx` — For shorter, fun fact style pages

See the [templates/README.md](./templates/README.md) for guidelines on frontmatter and how to use the MDX components.

## MDX Components

Located in `src/components/mdx/`:

- `<Figure />` — Images with captions and alt text
- `<FunFact />` — Highlighted fun fact callouts
- `<ProsCons />` — Pros and Cons blocks
- `<ComparisonTable />` — Clean comparison tables
- `<AffiliateLink />` — Amazon / affiliate links
- `<Sources />` — Sources and references section

## Getting Started

```bash
npm install
npm run dev
```

## Goals

- Provide high-quality, trustworthy pet care information
- Gradually move from Sanity CMS to file-based MDX content
- Maintain excellent SEO and reading experience
- Support affiliate monetization transparently

---

Built with care for animals and the people who love them.