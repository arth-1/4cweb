"""
Background Removal Script for Team Photos
Uses rembg - a free open-source background removal tool
Install with: pip install rembg pillow
"""

import os
from pathlib import Path
from rembg import remove
from PIL import Image
import io

def remove_background(input_path, output_path):
    """
    Remove background from an image and save as PNG with transparency
    
    Args:
        input_path: Path to input image
        output_path: Path to save output image
    """
    try:
        print(f"Processing: {input_path.name}")
        
        # Read input image
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # Remove background
        output_data = remove(input_data)
        
        # Save as PNG (supports transparency)
        output_image = Image.open(io.BytesIO(output_data))
        output_image.save(output_path, 'PNG')
        
        print(f"✓ Saved: {output_path.name}")
        return True
        
    except Exception as e:
        print(f"✗ Error processing {input_path.name}: {str(e)}")
        return False

def process_directory(directory_path, extensions=['.jpg', '.jpeg', '.webp', '.png']):
    """
    Process all images in a directory and its subdirectories
    
    Args:
        directory_path: Path to directory containing images
        extensions: List of image extensions to process
    """
    directory = Path(directory_path)
    
    if not directory.exists():
        print(f"Directory not found: {directory_path}")
        return
    
    # Find all image files
    image_files = []
    for ext in extensions:
        image_files.extend(directory.glob(f"**/*{ext}"))
    
    if not image_files:
        print(f"No images found in {directory_path}")
        return
    
    print(f"\nFound {len(image_files)} images in {directory.name}/")
    print("-" * 60)
    
    success_count = 0
    
    for image_path in image_files:
        # Create output filename (replace extension with .png)
        output_filename = image_path.stem + '_no_bg.png'
        output_path = image_path.parent / output_filename
        
        # Skip if already processed
        if output_path.exists():
            print(f"⊘ Skipped (already exists): {output_filename}")
            continue
        
        if remove_background(image_path, output_path):
            success_count += 1
    
    print(f"\n✓ Successfully processed {success_count} images in {directory.name}/")
    print("-" * 60)

def main():
    """Main function to process all team photo directories"""
    print("=" * 60)
    print("Background Removal Tool for Team Photos")
    print("=" * 60)
    
    # Base directory for team photos
    base_dir = Path(__file__).parent / 'public' / 'team'
    
    # Directories to process
    directories = [
        'Advisory',
        'Core',
        'SuperCore',
        'Crew'
    ]
    
    total_processed = 0
    
    for dir_name in directories:
        dir_path = base_dir / dir_name
        process_directory(dir_path)
    
    print("\n" + "=" * 60)
    print("Background removal complete!")
    print("=" * 60)
    print("\nNote: Original images are kept unchanged.")
    print("New images are saved with '_no_bg.png' suffix.")
    print("\nTo replace originals, manually rename the new files.")

if __name__ == "__main__":
    main()
