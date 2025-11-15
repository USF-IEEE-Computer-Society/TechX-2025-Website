import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import sharp from 'sharp';

const INPUT_DIRS = ['src/assets'];

const exts = ['.png', '.jpg', '.jpeg'] as const;
type SupportedExt = (typeof exts)[number];

async function convertFile(filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase() as SupportedExt;

  if (!exts.includes(ext)) return;

  const outPath = filePath.replace(ext, '.webp');

  if (fs.existsSync(outPath)) {
    console.log('Skip (exists):', outPath);
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: 80 }) // tune quality if you want
      .toFile(outPath);

    console.log('Converted:', filePath, '->', outPath);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Error converting', filePath, message);
  }
}

async function processDir(dir: string): Promise<void> {
  if (!fs.existsSync(dir)) return;

  // normalize for Windows
  const pattern = `${dir.replace(/\\/g, '/')}/**/*.{png,jpg,jpeg}`;
  const files = await glob(pattern);

  await Promise.all(files.map(convertFile));
}

async function main(): Promise<void> {
  for (const dir of INPUT_DIRS) {
    await processDir(dir);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
